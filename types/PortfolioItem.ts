
export default interface PortfolioItem {
  id: number,
  image: string,
  isPetProject: boolean,
  title: string,
  url: string,
  description: string,
  features?: string[],
  remarkable?: string[],
  madeWith: string,
}