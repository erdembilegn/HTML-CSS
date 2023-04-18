


Sagsnii_tovch.addEventListener('click', ()=>{
    const SagsniiHeseg = document.getElementById('Sagsnii_heseg')
    const SagsDisabled = 'background-color:grey'
    SagsniiHeseg.style = SagsDisabled

    const Neg = document.getElementById('Ehnii_version')
    const HoyrLuu = 'left: 25%;'
    Neg.style =HoyrLuu

    const Urgeljluuleh_button = document.getElementById('Urgeljluuleh_button')
    Urgeljluuleh_button.style = 'background-color:#EE3A43'


    Sagsnii_tovch.style =` background-color:grey;
        border: 1px solid #000000;
        border-radius: #000000;
        cursor: context-menu;
        color: #000000;
    `
    Sagsnii_tovch.disabled = true;
})


Urgeljluuleh_button.addEventListener('click', ()=>{

    const Neg = document.getElementById('Ehnii_version')
    const GuravLuu = 'left: 70%;'
    Neg.style =GuravLuu
})