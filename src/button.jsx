function Button(){
    const handclick1=() => console.log("Ouch");
    const handclick2=() => console.log("STOP BUDDY");
return (<button onClick={handclick1}>Click me</button>);
}
export default Button