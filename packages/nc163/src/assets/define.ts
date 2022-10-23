import {
    twitterlogo,
    githublogo,
    ethereumlogo,
    bookmeterlogo,
    henkakulogo,
    unchainlogo
} from './logo';


const SocialCardProps: CardProps = {
    title: "Social",
    items: [
        {
            title: "Twitter",
            link: "https://www.twitter.com/nc163",
            logo: twitterlogo
        },
        {
            title: "Github",
            link: "https://github.com/nc163",
            logo: githublogo
        },
        {
            title: "読書メーター",
            link: "https://bookmeter.com/users/593986",
            logo: bookmeterlogo
        },
    ]
}


const WalletCardProps: CardProps = {
    title: "Wallet",
    items: [
        {
            title: "Ethereum",
            text: "nc163.eth",
            logo: ethereumlogo
        },
    ]
}

const CommunityCardProps: CardProps = {
    title: "Community",
    items: [
        {
            title: "UNCHAIN",
            logo: unchainlogo,
            text: "UNCHAIN",
        },
        {
            title: "HENKAKU",
            logo: henkakulogo,
            text: "HENKAKU",
        },
    ]
}

export { SocialCardProps, WalletCardProps, CommunityCardProps }