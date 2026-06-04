*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:#222;
}

.calculator{
    background:#333;
    padding:20px;
    border-radius:15px;
    box-shadow:0 0 15px rgba(0,0,0,0.5);
}

#display{
    width:100%;
    height:60px;
    margin-bottom:15px;
    font-size:24px;
    text-align:right;
    padding:10px;
    border:none;
    border-radius:10px;
}

.buttons{
    display:grid;
    grid-template-columns:repeat(4,70px);
    gap:10px;
}

button{
    height:60px;
    border:none;
    border-radius:10px;
    font-size:22px;
    cursor:pointer;
    transition:0.2s;
}

button:hover{
    transform:scale(1.05);
}

button:last-child{
    grid-column:span 2;
}
