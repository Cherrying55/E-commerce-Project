

export default function SuccessPage(){

    //usará o contexto cart mas potencialmente terá um boolean de ordered nele.
    //alguma forma de lidar com codigo do pedido e mostrar ele na tela, provavelmente em ordem vai postar em requests e resposta vai ser o token, seta isso em cartcontext

    return(
        <Main>
            <h1>{"Order" + cart.ordercode + "was successfull"}</h1>
        </Main>
    )
}