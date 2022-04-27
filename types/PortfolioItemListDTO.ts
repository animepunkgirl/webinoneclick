import PortfolioItem from "@Types/PortfolioItem";

export type PortfolioItemListDTO = Pick<PortfolioItem, "id" | "title" | "isPetProject">