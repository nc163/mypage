type CardProps = {
    title: string;
    items: CardListItemProps[];
}

type CardListItemProps = {
    title: string;
    link?: string;
    text?: string;
    logo: string;
}
