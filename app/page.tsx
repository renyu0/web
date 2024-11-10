export default function Home() {

  const box = {
    'background-color': '#333',
    'padding': '1.5rem',
    'text-align': 'center',
    'font-size': '50px',
    'color': 'white'
  }
  
  const defoult = {
    'padding': '50rem',
    'text-align': 'center',
    'color': '#111'
  }

  const ifurinterestedinme = {
    'border': '2px solid #ccc',
    'background-color': '#eee'
  }

  return (
    <div>
      <div style={box}>
        Probably Web
      </div>

      <div style={defoult}>
        <div style={ifurinterestedinme}>
          <p>
            안녕!<br/>
            여긴 내가 만들고 관리하는<br/>
            어쩌고 저쩌고 하는 웹 사이트야!<br/><br/>
          </p>
          <p>
            나에 대해 알고 싶다면<br/>
            이 <MyButton name='Button'/>을 눌러줘!
          </p>
        </div>
      </div>

      <ShowHL/>

      <div style={box}>
        Thanks
      </div>
    </div>
  );
}

type types = {
  name: string;
  date: Date;
}

function MyButton(params: types) {
  var box = {
    'background-color': '#555',
    'padding': '0.2rem',
    'text-align': 'center',
    'font-size': '15px',
    'color': 'white'
  }

  return(
    <button style={box}>
      <div>
        <a href="http://127.0.0.1:3001/test.html">
          {params.name}.{''}
        </a>
      </div>
    </button>
  );
}

function ShowHL(params: types) {

  return(
    <div
    className="bg-red-400 text-5xl w-[125px]"
      style={{backgroundColor: "rgb(203 213 225)"}}
    >
      <button>qwer
        {/* {params.date.getDate()} */}
      </button>
    </div>
  );
}