import AppCard from "./elements/AppCard";
import { SocialCardProps, WalletCardProps, CommunityCardProps } from "./assets/define"

function App() {
  return (
    <div className="App">
        <main className='container'>
        <div className="row">
            <div className="col-sm mt-4">
                <AppCard {...SocialCardProps} />
            </div>

            <div className="col-sm mt-4">
                <AppCard {...WalletCardProps} />
            </div>
        </div>

        <div className="row">
            <div className="col-sm mt-4">
                <AppCard {...CommunityCardProps} />
            </div>
        </div>

        <div className="row">
            <div className="col-sm mt-4">
                <div className="card">
                    <div className="card-header font-weight-bold">NFT</div>
                    <ul className='list-group list-group-flush'>
                        本当はここにNFTを表示したい
                    </ul>
                </div>
            </div>
        </div>

        </main>
        <footer>
            <div className="text-center mb-2">
            <p><small>repository:&nbsp;<code>https://github.com/nc163/nc163.git</code></small></p>
            <p><small>© 2022 nc163</small></p>
            </div>
        </footer>
    </div>
  );
}

export default App;
