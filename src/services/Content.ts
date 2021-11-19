import fs from 'fs'
import { join } from 'path'

import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export type PostItems = {
  [key: string]: string
}

export function getPostFileNames() {
  return fs.readdirSync(postsDirectory)
}

export function getPostByName(name: string, fields: string[] = []) {
  const fullPath = join(postsDirectory, name)

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const items: PostItems = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'name') {
      items[field] = name
    }
    if (field === 'path') {
      items[field] = fullPath
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field] ?? null
    }
  })

  return items
}
export function getPostBySlug(slug: string, fields: string[] = []) {
  const names = getPostFileNames()
  const name = names.find(name => new RegExp(`\\d{3,}-${slug}.md`, 'gi').test(name))

  return getPostByName(name!, fields)
}

export function getAllPosts(fields: string[] = []) {
  const names = getPostFileNames()

  const sortField = 'createdAt'
  !fields.includes(sortField) && fields.push(sortField)

  const posts = names
    .map(name => getPostByName(name, fields))
    // filter posts with createdAt date in future
    .filter(post => new Date(post[sortField]) <= new Date())
    // sort posts by date in descending order
    .sort((post1, post2) => (post1[sortField] > post2[sortField] ? -1 : 1))

  return posts
}
