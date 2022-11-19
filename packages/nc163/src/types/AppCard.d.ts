type CardProps = {
    title: string;
    items: CardListProps[];
}

type CardListProps = {
    title: string;
    link?: string;
    logo: string;
}