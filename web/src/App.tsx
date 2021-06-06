import React, { useRef, useState } from "react";

const App: React.FC<any> = () => {
	const [file, setFile] = useState<File | null>(null);
	const filePicker = useRef<HTMLInputElement>(null);

	// const [fileData, setFileData] = useState<any>(null);

	const [responseImage, setResponseImage] = useState<any>(null);

	const [error, setError] = useState(false);

	const blobToBase64 = (blob: Blob) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = function () {
			const base64data = reader.result;
			setError(false);
			setResponseImage(base64data);
		};
	};

	const uploadImage = async (image: File) => {
		if (image === null) return;

		try {
			const formData = new FormData();
			formData.append("image", image);

			const res = await fetch("/detect", {
				method: "POST",
				body: formData,
			});

			if (res.status === 200) {
				const resImage = await res.blob();
				blobToBase64(resImage);
			} else {
				setFile(null);
				setResponseImage(null);
				setError(true);
			}
		} catch (err) {
			console.error(err);
			setFile(null);
			setError(true);
			setResponseImage(null);
		}
	};

	const openFilePicker = () => file === null && filePicker.current?.click();

	const uploadNewImage = () => {
		setFile(null);
		// setFileData(null);
		setResponseImage(null);
	};

	const selectFile = (e: any) => {
		if (e && e.target.files && e.target.files.length > 0) {
			const image = e.target.files[0];

			if (image.type === "image/png" || image.type === "image/jpeg") {
				setFile(image);
				uploadImage(image);
				// setFileData(URL.createObjectURL(e.target.files[0]));
			} else {
				alert("Upload Images only");
				return;
			}
		} else {
			setFile(null);
		}
	};

	const onFileDrop = (e: any) => {
		e.preventDefault();
		const files = e.dataTransfer.files as [File];
		if (files.length > 0) {
			const image = files[0];
			if (image.type === "image/png" || image.type === "image/jpeg") {
				console.log(files[0]);
				setFile(files[0]);
				uploadImage(files[0]);
				// setFileData(URL.createObjectURL(files[0]));
			} else {
				alert("Upload Images only");
				return;
			}
		} else {
			setFile(null);
		}
	};

	const dragOver = (e: any) => {
		e.preventDefault();
	};

	const dragEnter = (e: any) => {
		e.preventDefault();
	};

	const dragLeave = (e: any) => {
		e.preventDefault();
	};

	return (
		<section className="text-gray-700 ">
			<div className="container flex flex-col items-center px-5 py-8 mx-auto">
				<div className="flex flex-col w-full mb-12 text-left lg:text-center">
					<a
						href="https://shipper-web.netlify.app"
						className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"
					>
						Shipper ML
					</a>
					<h1 className="mx-auto mb-12 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 sm:text-6xl title-font">
						Ship Detection using Satellite Imagery
					</h1>

					{!responseImage ? (
						<div
							onDragOver={dragOver}
							onDragEnter={dragEnter}
							onDragLeave={dragLeave}
							onDrop={onFileDrop}
							className="w-full h-32 md:h-64 bg-blue-100 rounded flex flex-col items-center justify-center cursor-pointer relative"
							onClick={openFilePicker}
						>
							<label
								htmlFor="file"
								className="text-base md:text-xl font-medium text-center text-black p-4"
							>
								{file
									? `Uploading ${file.name}`
									: "Select an Image or drop one here to detect"}
							</label>
							<input
								accept="image/png, image/jpeg"
								onChange={selectFile}
								ref={filePicker}
								name="file"
								type="file"
								className="w-full h-full bg-red-300 absolute"
								style={{
									visibility: "hidden",
								}}
							/>
						</div>
					) : (
						<div className="flex flex-col items-center">
							<button
								className="bg-indigo-500 rounded w-full md:w-64 py-3 text-white font-medium"
								onClick={uploadNewImage}
							>
								Upload new image
							</button>
							<p className="text-xl text-black font-medium  mt-8 -mb-6">
								Results:
							</p>
						</div>
					)}
				</div>

				{error && (
					<p className="text-red-500 text-lg">An error occured</p>
				)}
				<div className="flex flex-col md:flex-row w-full flex-wrap space-y-8 md:space-y-0">
					{responseImage && (
						<div className="w-full flex flex-col space-y-4">
							<img src={responseImage} />

							<p>Detected Image</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default App;
