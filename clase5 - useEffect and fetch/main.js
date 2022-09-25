

const NewH1 = (props) => {
    return React.createElement('h1', {id: 'title'}, props.text);
}
const NewH2 = (props) => {
    return React.createElement('h2', {id: 'subTitle'}, props.text);
}
const NewP = (props) => {
    return React.createElement('p', {id: 'paraf'}, props.text);
}
const NewBtn = (props) => React.createElement('button', {onClick: props.consoleClick}, 'Enviar');

const App = () => {
    const consoleClick = () => console.log('click!!!');
    return React.createElement('div', {id: 'container'}, [
    React.createElement(NewH1, {text: 'Hola React'}, []),
    React.createElement(NewH2, {text: 'Primeras renderizaciones con React'},[]), 
    React.createElement(NewP, {text: 'Aprendiendo la renderización React atraves de la primera clase de Nucba'},[]),
    React.createElement(NewBtn, {consoleClick: consoleClick}),
])};



ReactDOM.render(
    React.createElement(App), document.querySelector('body')
)
    
