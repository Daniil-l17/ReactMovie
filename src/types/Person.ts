export interface IpersonPopular {
  docs: Doc[]
  total: number
  limit: number
  page: number
  pages: number
}

export interface Doc {
  id: number
  name?: string | undefined
  enName?: string
  photo: string
  age?: number
  sex?: string
}
