export default function Home() {

  var box = {
    'background-color': '#333',
    'padding': '2rem',
    'text-align': 'center',
    'color': 'white'
  }
  
  var defoult = {
    'padding': '50rem',
    'text-align': 'center',
    'color': '#111'
  }

  return (
    <div>
      <div style={box}>
        <p>Probably Web</p>
      </div>

      <div style={defoult}>
        <p>
          안녕!<br/>
          여긴 내가 만들고 관리하는<br/>
          어쩌고 저쩌고 하는 웹 사이트야
          </p>
      </div>
      
      <div style={box}>
        Thanks
      </div>
    </div>
  );
}