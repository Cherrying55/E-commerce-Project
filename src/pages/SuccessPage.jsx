

export default function SuccessPage(){

    //link é /code/sucess, code vem do params. dai confere se tem um no server assim. 

    return(
        <Main>
            <h1>{"Order" + cart.ordercode + "was successfull"}</h1>
        </Main>
    )
}