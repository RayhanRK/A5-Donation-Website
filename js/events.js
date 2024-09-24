//------- Common items-------

// header buttons
const btnHistory  = document.getElementById('btn-history');
const btnDonation = document.getElementById('btn-donation');

// Main section and history tab id
const mainSection    = document.getElementById('main-sec');
const historySection = document.getElementById('history-page');

// Home page 3 cards donation buttons
const noakhaliButton = document.getElementById('btn-noakhali');
const feniButton     = document.getElementById('btn-feni');
const quotaButton    = document.getElementById('btn-quota'); 



//--------------- All card Events--------------

// Noakhali card  

noakhaliButton.addEventListener('click',function(){

    const navbarBalance       = getBalance('nav-balance');
    const noakhaliCoinBalance = getBalance('ncn-balance');
    const noakhaliCardTitle   = document.getElementById('ncd-title').innerText;
    const donationInput       = getInputValue('noakhali-donationInput');

    calculate(donationInput,navbarBalance,noakhaliCoinBalance,'ncn-balance',noakhaliCardTitle);

})


// Feni card 

feniButton.addEventListener('click', function(){

    const navbarBalance   = getBalance('nav-balance');
    const feniCoinBalance = getBalance('fcn-balance');
    const feniCardTitle   = document.getElementById('fcd-title').innerText;
    const donationInput   = getInputValue('feni-donationInput');

    calculate(donationInput,navbarBalance,feniCoinBalance,'fcn-balance',feniCardTitle);

})

// Quota card  

quotaButton.addEventListener('click',function(){

    const navbarBalance    = getBalance('nav-balance');
    const quotaCoinBalance = getBalance('qcn-balance');
    const quotaCardTitle   = document.getElementById('qcd-title').innerText;
    const donationInput    = getInputValue('quota-donationInput');

    calculate(donationInput,navbarBalance,quotaCoinBalance,'qcn-balance',quotaCardTitle)
      
})


//---------------click events:-----------------

btnHistory.addEventListener('click', function(){

    mainSection.classList.add('hidden');
    historySection.classList.remove('hidden');

    btnHistory.classList.add('bg-[#B4F461]', 'text-[#111111]');
    btnHistory.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')
	
	
   btnDonation.classList.remove('bg-[#B4F461]', 'text-[#111111]');
   btnDonation.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')

})

btnDonation.addEventListener('click', function(){

    mainSection.classList.remove('hidden');
    historySection.classList.add('hidden');

    btnDonation.classList.add('bg-[#B4F461]', 'text-[#111111]');
    btnDonation.classList.remove('border-2' ,'border-[#111111B3]','text-[#111111B3]')

    btnHistory.classList.remove('bg-[#B4F461]', 'text-[#111111]');
    btnHistory.classList.add('border-2' ,'border-[#111111B3]','text-[#111111B3]')
})




//--------------------------- All function js------------------------------------

//2 common functions:

function getInputValue(id){

    return parseFloat(document.getElementById(id).value);
}

function getBalance(id){

    return parseFloat(document.getElementById(id).innerText);
}


// calculating function

function  calculate(donationInput,navbarBalance,locationBalance,id,locationTitle){

    if(isNaN(donationInput ) || 1> donationInput){

        alert('Invalid Donation Amount!')
    }
    else if( donationInput > navbarBalance){
        alert("Insufficient Balance!")
    }
    else{
        my_modal.showModal();
        document.getElementById(id).innerText = (locationBalance + donationInput).toFixed(2);
        document.getElementById('nav-balance').innerText = (navbarBalance - donationInput).toFixed(2);

        history(donationInput,locationTitle);
    }

}

// History function

function history(donationInput,locationTitle){

    const div = document.createElement('div');
    const now = new Date()
    const dateTimeString = now.toString();

    div.classList.add( 'flex', 'flex-col', 'gap-4', 'md:p-6', 'p-4', 'border-2', 'border-[#111111B3]', 'rounded-lg');
    div.innerHTML = `
        <h3 class="md:text-xl font-extrabold text-black">
            ${donationInput} Taka donated to: ${locationTitle}
        </h3>
        <p class="text-[#111111B3] bg-[#f9f7f3] rounded-lg px-4 py-2">Date : 
            ${dateTimeString}
        </p>   
    `;
    document.getElementById('history-div').appendChild(div);

}
