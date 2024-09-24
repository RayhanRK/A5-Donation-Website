//------- Common items-------

// header buttons
const btnHistory  = document.getElementById('btn-history');
const btnDonation = document.getElementById('btn-donation');

// Main section and history tab id
const mainSection    = document.getElementById('main-sec');
const historySection = document.getElementById('history-page');

// Home page 3 cards donation buttons
const noakhaliBut = document.getElementById('btn-noakhali');
const feniBut     = document.getElementById('btn-feni');
const quotaBut    = document.getElementById('btn-quota'); 

//------------click events:--------------

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









// All cards functionalities :
// Noakhali card js



// Feni card js



// Quota card js