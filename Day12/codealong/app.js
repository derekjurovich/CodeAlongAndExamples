var fruits = ["apples", "oranges", "bananas", "grapes"];

var mapper = function(arr) {
  return arr.map(function(bit){
    bit +=5;
    return <li>{bit}</li>
  })
};

var Results = React.createClass({
  render: function(){
    return (
      <div>
        <div>Happy</div>
        <div>Sad</div>
        <div>Afraid</div>
        <div>Sad</div>
      </div>);
  }
});

var Buttons = React.createClass({
  numArr: ["A","B","C","D"],
  render: function(){
    return (
    <div>
      <button>Button {this.numArr[0]}</button>
      <button>Button {this.numArr[1]}</button>
      <button>Button {this.numArr[2]}</button>
      <button>Button {this.numArr[3]}</button>
      {mapper(fruits)}
    </div>
    );
  }
});

React.render(
  (<div><Results/><Buttons/></div>),
   document.getElementById('howTheyFeel')
);
