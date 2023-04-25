class ProductList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"})
        this.attrStyle = document.createElement('style');
        this.section = document.createElement('section');
        this.attrStyle.innerHTML = `

        section {
            display: grid;
            grid-template-columns: auto;
            gap: 3rem;
            width: 70%;
	        max-width: 18.75rem;
        }
        /*Buteegdehuun1*/
        .Buteegdehuun {
            background-color: #FFFFFF;
            padding: 1.063rem 0.5rem 0 2.063rem;
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto auto;
            border-radius: var(--border_radius);
            border: 1px solid #000000;
        
        }
        
        /*Buteegdehuun1 iin garchig*/
        .Garchig {
            grid-row: 1;
            grid-column: 1 /3;
        }
        
        /*Buteegdehuun1 songolt*/
        .Songolt {
            width: 100%
            background-color: black;
            padding: 2%;
            grid-row: 2;
            grid-column: 1;
            border: 1px solid #000000;
            border-radius: 0.9rem;
        }
        
        /*Buteegdehuun1 ustgah tovch*/
        .Sags_zahialga>.Buteegdehuun>.Ustgah {
            width: 1.75rem;
            height: 1.75rem;
            background-color: var(--white_color);
            margin: auto auto;
            display: block;
            grid-column: 3;
            grid-row: 2;
            border-radius: 50%;
            border: 1px solid #CEB79B;
            cursor: pointer;
            color: #CEB79B;
            /* padding: 30% 40%; */
        }
        
        /*Buteegdehuun1 hool nemeh heseg*/
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh {
            width: 20%;
            grid-row: 3;
            grid-column: 1;
            display: grid;
            grid-template-columns: auto auto auto;
            /* height: 2.188rem; */
        }
        
        /*Buteegdehuun1 hool nemeh hasah tovch*/
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh>.Nemeh,
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh>.Hasah {
            width: 1.75rem;
            height: 1.75rem;
            background-color: var(--white_color);
            margin-top: 0.867rem;
            border-radius: 0.5rem;
            border: 1px solid #000000;
            cursor: pointer;
        }
        
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh>.Nemeh {
            grid-column: 1;
        }
        
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh>p {
            width: 1.75rem;
            height: 1.75rem;
            grid-column: 2;
            text-align: center;
        }
        
        .Sags_zahialga>.Buteegdehuun>.Hool_nemeh>.Hasah {
            grid-column: 3;
        }
        
        /*Buteegdehuun1 hoolnii uniin heseg*/
        .Sags_zahialga>.Buteegdehuun>.Une {
            grid-row: 3;
            grid-column: 2;
            text-align: left;
        }
        
        /*Sagsnii niit une+tovch*/
        .Sags_zahialga>.Sagsnii_tovch {
            display: grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto auto;
            row-gap: 21%;
        }
        
        }`

        this.shadowRoot.appendChild(this.section)
    }

        #Render(e){
            const article = document.createElement('article')
            article.innerHTML = `
               
                    <section class="Sags_zahialga">
                        <section class="Buteegdehuun">
                            <section class="Garchig">
                                <p>${e.name}</p>
                            </section>


                            <select class="Songolt" name="төрөл">
                                <option>Том пан</option>
                                <option>Том уламжлалт</option>
                                <option>Дунд пан</option>
                                <option>Дунд уламжлалт</option>
                                <option>Жижиг пан</option>
                                <option>Жижиг уламжлалт</option>
                            </select>

                            <section class="Hool_nemeh">
                                <button class="Nemeh" type="submit" onclick="nemehFunction()">+</button>
                                <p id="too">${e.quantity}</p>
                                <button class="Hasah" type="submit" onclick="hasahFunction()">-</button>
                            </section>
                            <p class="Une">${e.price}</p>
                            <button class="Ustgah" type="submit">x</button>
                        </section>


                    </section>
            `
            
            this.shadowRoot.appendChild(this.attrStyle)
            this.shadowRoot.querySelector('section').append(article);
        }

    connectedCallback() {

        fetch('../json/product.json')
            .then(res=>res.json())
            .then(data => {
                console.log(data.products)
                const products = data.products
                products.map((product)=>{
                    this.#Render(product)
                })
            })

    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('product-list', ProductList);