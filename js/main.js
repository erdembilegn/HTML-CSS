
Sagsnii_tovch.addEventListener('click', ()=>{
    const SagsniiHeseg = document.getElementById('Sagsnii_heseg')
    const SagsDisabled = 'opacity: 0.7;'
    SagsniiHeseg.style = SagsDisabled

    const Neg = document.getElementById('Ehnii_version')
    const HoyrLuu = 'left: 25%;'
    Neg.style =HoyrLuu

    const Urgeljluuleh_button = document.getElementById('Urgeljluuleh_button')
    Urgeljluuleh_button.style = `    background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;
    `
    
    const HurgeltiinHeseg = document.getElementById('Hurgeltiin_heseg')

    HurgeltiinHeseg.style = 'opacity: 1;'

    Sagsnii_tovch.style =` background-color:#FFFFFF;
        border: 1px solid #000000;
        border-radius: #000000;
        cursor: context-menu;
        color: #000000;
    `
    Sagsnii_tovch.disabled = true;
    Butsah_button.disabled = false;
    Urgeljluuleh_button.disabled = false;
    Tulburiin_butsah.disabled = true;

   const circle = document.getElementById('Hoyr_circle')
   circle.style = 'color:#FFFFFF;'


})


Urgeljluuleh_button.addEventListener('click', ()=>{
    const HurgeltiinHeseg = document.getElementById('Hurgeltiin_heseg')
    const HurgeltDisabled = 'opacity: 0.7;'
    HurgeltiinHeseg.style = HurgeltDisabled

    const Neg = document.getElementById('Ehnii_version')
    const GuravLuu = 'left: 70%;'
    Neg.style =GuravLuu

    const Tulburiin_butsah= document.getElementById('Tulburiin_butsah')
    Tulburiin_butsah.style = `background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`
    
    const TulburiinHeseg = document.getElementById('Tulburiin_heseg')

    TulburiinHeseg.style = 'opacity: 1;'

    Urgeljluuleh_button.style = ` background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;
    `
    Sagsnii_tovch.disabled = true;
    Urgeljluuleh_button.disabled = true;
    Butsah_button.disabled = true;
    Tulburiin_butsah.disabled = false;
    
})


Tulburiin_butsah.addEventListener('click', ()=>{
    const TulburiinHeseg = document.getElementById('Tulburiin_heseg')
    TulburiinHeseg.style = 'opacity: 0.7;'

    const HurgeltiinHeseg = document.getElementById('Hurgeltiin_heseg')
    HurgeltiinHeseg.style = 'opacity: 1;'

    const Urgeljluuleh_button = document.getElementById('Urgeljluuleh_button')
    Urgeljluuleh_button.style = `    background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`



    const Neg = document.getElementById('Ehnii_version')
    const HoyrLuu = 'left: 25%;'
    Neg.style =HoyrLuu

    const Tulburiin_butsah= document.getElementById('Tulburiin_butsah')
    Tulburiin_butsah.style = `background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;`
    
    Sagsnii_tovch.disabled = true;
    Butsah_button.disabled = false;
    Urgeljluuleh_button.disabled = false;
    Tulburiin_butsah.disabled = true;


})


Butsah_button.addEventListener('click', ()=>{
    const SagsniiHeseg = document.getElementById('Sagsnii_heseg')
    const SagsDisabled = 'opacity: 1;'
    SagsniiHeseg.style = SagsDisabled

    const HurgeltiinHeseg = document.getElementById('Hurgeltiin_heseg')
    HurgeltiinHeseg.style = 'opacity: 0.7;'

    const Urgeljluuleh_button = document.getElementById('Urgeljluuleh_button')
    Urgeljluuleh_button.style = `background-color:#FFFFFF;
    border: 1px solid #000000;
    border-radius: #000000;
    cursor: context-menu;
    color: #000000;`


    const Neg = document.getElementById('Ehnii_version')
    const HoyrLuu = 'left: 10%;'
    Neg.style =HoyrLuu

    Sagsnii_tovch.style =`background-color:#EE3A43;
    color: #FFFFFF;
	border: 1px solid #EE3A43;
	cursor: pointer;`

    Sagsnii_tovch.disabled = false;
    Butsah_button.disabled = true;
    Urgeljluuleh_button.disabled = true;
    Tulburiin_butsah.disabled = true;

    const circle = document.getElementById('Hoyr_circle')
    circle.style = 'color:#EE3A43;'
})