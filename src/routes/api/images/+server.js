import { json } from '@sveltejs/kit'

async function getImages() {
    let images = []

	const paths = import.meta.glob('/src/gallery/*.jpg', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.jpg', '')?.replace('-', ' ')
        images.push({src: file.default, alt: slug})
    }

    return images
}

export async function GET() {
	const images = await getImages()
	return json(images)
}