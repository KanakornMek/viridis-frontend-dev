import qs from 'qs';
import { viridisApi, omise } from '../../../api/axiosConfig';
import kplusLogo from '../assets/kplus.png';
import scbLogo from '../assets/scb.png'
import bualuangLogo from '../assets/bualuang.png'

import './BankingOptions.css'

function BankSelection({logo, bank, onClick}) {
    return(
        <div 
          className='bank-selection-container'
          onClick={onClick}
        >
            <img src={logo} alt='logo' height='100%' />
            <p>{bank}</p>
        </div>
    );
}

function BankingOptions({price, quantity, isQr, qrPhone}) {
    const banks = [
        { name: 'K plus', logo: kplusLogo, type: 'mobile_banking_kbank'},
        { name: 'SCB Easy', logo: scbLogo, type: 'mobile_banking_scb'},
        { name: 'Bualuang mBanking', logo: bualuangLogo, type: 'mobile_banking_bbl' },
    ]
    return(
        <div className='bank-options-container'>
            {banks.map((bank, index) => (
                <BankSelection
                    key={index}
                    bank={bank.name}
                    logo={bank.logo}
                    onClick={() => {
                        omise.post('/sources', qs.stringify({
                            amount: price *100,
                            currency: 'THB',
                            type: bank.type
                        })).then((res) => {
                            if(isQr){
                                viridisApi.post('/service/purchase', {
                                    amtToken: quantity,
                                    tokenPrice: 2,
                                    totalPrice: price,
                                    phoneNumber: qrPhone,
                                    sourceId: res.data.id,
                                    type: "mobile_banking",
                                }).then((res) => {
                                    window.location = res.data.authorize_uri
                                })
                            } else {
                                viridisApi.post('/token/purchase', {
                                    amtToken: quantity,
                                    tokenPrice: 20,
                                    totalPrice: price,
                                    sourceId: res.data.id,
                                    type: "mobile_banking",
                                }).then((res) => {
                                    window.location = res.data.authorize_uri
                                })
                            }
                            
                        })
                    }}
                />
            ))}
        </div>
    );
}


export default BankingOptions

