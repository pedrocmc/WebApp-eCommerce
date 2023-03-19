import logo from './resources/aula.png';

export default function(){
    return(
        <div className='main'>

            <div className='center'>  
            <div className='menu'>
                <div className='logo'>
                    <img src={logo}/>
                </div>

                <div className='caixa'>
                <input type= "text" placeholder="Oque quer comprar hoje?" />
                </div>  

            <div className='item-menu'>
                 <a href='#'>Inicio</a>
                 <a href='#'>Contato</a>
                 <a href='#'>Login</a>
                </div>
            </div>
            </div>
        </div>
    );

}