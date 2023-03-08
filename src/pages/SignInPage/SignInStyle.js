import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100vh;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgb(59 58 58);

 

.animated-image {
  animation: slide-in 5s linear infinite;
  position: relative; 
}

@keyframes slide-in {
  0% {
    transform: translateX(-100vh); /* começa fora da tela à esquerda */
  }
  100% {
    transform: translateX(100vh); /* move para a direita e sai da tela */
  }
}



    
    a {
        text-decoration: none;
    }
    
    .cadastro   {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-decoration-line: underline;
        color: #FFFFFF;
        text-align: center;
    }
    
    .animation  {
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`
export const Title = styled.div`   
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 27%;
    left: 0px;
    top: 0px;
    background: #151515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
    h1  {
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 76px;
        line-height: 84px;
        text-align: center;
        color: #FFFFFF;
        letter-spacing: 0.05em;
    }
   
    p   {
        width: 237px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
            
    }
   
`

export const StyledInputs = styled.div`

    display:flex;
    width: 300px;
    flex-direction: column;
    margin: 30px auto;

    input   {
        margin: auto;
        margin-bottom: 25px;
        padding: 10px;
        width: 300px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
        color: #9F9F9F;
        transition: all 0.4s;
     
        &:focus {
            width: 320px;
            height: 50px;
            transform: translate(-10px, 0); 
        }
    }
`

export const StyledButton = styled.button`

background: #1877F2;
    border-radius: 5px;
    border: none;
    width: 300px;
    height: 45px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #FFFFFF;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s linear;
    
    :hover{
        scale: 0.96;        
        cursor: pointer;
    }
`