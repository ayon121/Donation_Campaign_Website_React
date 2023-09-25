const getStoredDonation = () => {
    const StoredDonationData = localStorage.getItem('donation-history')
    if(StoredDonationData){
        return JSON.parse(StoredDonationData)
    }
    return []
    
}

const SaveDonation = id => {
    const StoredDonationData = getStoredDonation();
    const exists = StoredDonationData.find(DonationId => DonationId === id);
    if(!exists){
        StoredDonationData.push(id)
        localStorage.setItem('donation-history' , JSON.stringify(StoredDonationData))
    }
}

export {getStoredDonation , SaveDonation}