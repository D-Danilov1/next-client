import { ChangeEvent, RefObject, useMemo, useState } from 'react'
import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { FileService } from '@/services/file.service'

type TypeUpload = (
	onChange: (arg: string[]) => void,
	folder?: string,
	inputRef?: RefObject<HTMLInputElement>
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

interface IUploadFile {
	name: string
	url: string
}

export const useUpload: TypeUpload = (onChange, folder, inputRef) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload files',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess({ data }) {
				const fileUrls = data.map((file: IUploadFile) => file.url)
				onChange(fileUrls)
			},
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)
			const files = e.target.files
			if (files && files.length <= 10) {
				const formData = new FormData()
				Array.from(files).forEach((file) => formData.append('files', file))
				await mutateAsync(formData)

				setTimeout(() => {
					setIsLoading(false)
				}, 1000)
			} else {
				toastr.error(
					'Ошибка',
					'Одновременно можно загрузить только до 10 файлов, пожалуйста выберите файлы повторно'
				)
				setIsLoading(false)
				if (inputRef?.current) {
					inputRef.current.value = ''
				}
			}
		},
		[mutateAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
