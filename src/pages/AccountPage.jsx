
export default function AccountPage(){

//usará o authcontext

   return(
    <Main>
       <Aboutyou name={name} user={user} token={token} />
       <PreviousPurchases user={user} />
    </Main>
   )
}