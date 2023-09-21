import styled from "styled-components"

export function Breadcrumb(props){
    return(
        <BreadcrumbContainer>
        <li><a>Home / </a></li>
        <li><a> Products</a></li>
        </BreadcrumbContainer>
    )
}

const BreadcrumbContainer = styled.ol`

color: black;
display: flex;
margin-bottom: 8px;

li a{
    font-size: 15px;

}
`

/*
{props.list.map(
            (b) => b.active ? <li>{b.text}</li> : <li>{b.text} /</li>
        )}

*/