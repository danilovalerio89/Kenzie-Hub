import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;
}
body{
    background: var(--grey-4);
    font-family: 'Inter', sans-serif;
}
h1,h2,h3{
    color: var(--grey-0)
}
h1{
    font-size: 18px;
    font-weight: 700;
}
h2{
    font-size: 16px;
    font-weight: 600;
}
h3{
    font-size: 14px;
    font-weight: 700;
}
p{
    color: var(--grey-0);
    font-size: 10px;
    font-weight: 400;
}
button{
    cursor: pointer;
}
select{
    color: var(--grey-1);
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    
}
`;
