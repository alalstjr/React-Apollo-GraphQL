# React-Apollo-GraphQL 연습용 프로젝트

React 에 Apollo 와 GraphQL 를 적용시킨 프로젝트

신기능 연습...

# 개인 참고 메모장

Apollo Boost는 GraphQL 클라이언트를 가지기 위해서 모든걸 대신 셋업해준다.

# react-helmet 란

리액트로 만든 어플리케이션의 페이지에 페이지 제목과 meta 태그를 설정하는것은, 리액트에서 관리되는것이 아니기에, 다음과 같은 형식의 코드를 직접 입력해야하죠.

document.title = 'something';
var meta = document.createElement('meta');
meta.httpEquiv = "X-UA-Compatible";
meta.content = "IE=edge";
document.getElementsByTagName('head')[0].appendChild(meta);

각 라우트마다 이렇게 설정하는것은, 보기에도 그렇게 좋지 않고, 번거로울 수도 있습니다. 이 작업을 매우 용이하게 해주는 라이브러리가있는데요, 바로 react-helmet 입니다. 이 라이브러리는 페이지의 head 설정을 컴포넌트 렌더링하듯이 JSX 에서 할 수 있게 해주는 아주 유용한 라이브러리입니다.

https://velopert.com/3425

# GraphQL 사용하는 이유

GraphQL로 해결할 수 있는 두가지 문제는

1. Over-fetching

웹사이트를 예를 들면 유저의 이름을 출력하여 사용자에게 보여주고 싶을때 users라는 엄청나게 큰 패키지를 GET하여 가져옵니다. 가져온 패키지 중에서는 유저의 이름뿐 아니라 원치않은 정보까지 가져오며, 다른 곳에서도 동일하게 필요하지 않은 정보를 포함하여 큰 정보를 GET 하게됩니다.

Database에 내가 사용하지 않을 영역을 요청하는 방식을 Over-fetching 라 합니다.
우리가 요청한 정보의 영역보다 많은정보를 서버에서 받아오는 것
GraphQL는 Over-fetching해결하여 원하는 정보가 가져올 수 있도록 해줍니다.

2. Under-fetching

Under-fetching 란 바로 어떤 하나를 완성하기 위해 우리가 다른 요청을 해야 할 때 발생하는 것 예를 들어 앱을 실행하려면 페이지의 feed, notifications, user, 최소 세가지를 요청해야하고, 즉 세가지의 요청이 세번 오고가야 앱이 시작되는것이다. 이것이 바로 Under-fetching REST에서 하나를 완성하려고 많은 소스를 요청하는 것
이것도 GraphQL에서 해결 할 수 있는 문제입니다.

query {
  feed {
    commnets
    likeNumber
  }
  notifications {
    isRead
  }
  user {
    username
    profilePic
  }
}
이렇게 구현 할 수 있다. 이것을 GraphQL의 Backend에 이와 같은 정보를 보내면

{
  feed: [
    {
      comments:1,
      likeNumber: 20
    }
  ],
  notifications: [
    {
      isRead: true
    },
    {
      isRead: false
    }
  ],
  user: [
    {
      username: "Bae youngseop",
      profilePic: "http://...img"
    }
  ]
}
이와 같이 Object로 반환받는다. 정말 놀랍고 또 놀라운 기능이다. 우리가 요청한 정보들만 받을 수 있고 또 원하는 방식으로 조정이 가능 한 것이다!

#필요한 정보만 받아올 수 있는 이유

GraphQL에서는 URL자체가 존재하지 않다. URL체계도 없고 저러한 URL도 당연히 없다. 오직 하나의 종점만 있을 뿐 이것을 api로 하던 GraphQL로 하던 어떤 방식으로도 가능 GraphQL에서는 이 모든것을 한개의 query로 만들 수 있다.

#graphql yoga
create-react-app 명령어와 비슷하게 GraphQL 프로젝트를 빠르게 시작할 수 있게 도와준다.
‘쉽게 설치하는데 중점을 둔 완전한 기능을 갖춘 GraphQL 서버’

# schema란 무엇인가?

우리가 위에서 본 에러에서 schema를 볼 수 있었다. 그렇다면 schema는 무엇일까?
schema는 우리가 사용자에게 보내거나 받을 data에 대한 서술이라고 생각하면 된다. 이 schema는 Node.js나 Database를 위한것이 아니라 단지 Graphql을 위한것이고 그저 무엇을 받을지 무엇을 줄지에 대한 설명이다.

# schema.graphql

우리의 디렉토리에 graphql 이라는 폴더를 생성하고 그 안에 shcema.graphql라는 이름의 파일을 만들자. 이 파일에서는 사용자가 뭘 할지에 대해서 정의할것이다.
그 중 하나는 Database로부터 정보를 얻는것이다 우리는 이것을 Query 라고 부른다. 즉, Query는 단지 우리가 정보를 받아올때만 쓰는것이다.
또 다른 할 것은 정보를 Database로 보내는것이다. Mutation(변형)은 우리가 정보를 변경할때 우리의 서버에서 혹은 Database에서, 메모리에서 정보를 바꾸는 작업을 할 때 하는것을 Mutation(변형)이라고 한다.
이제 우리가 GraphQL 서버에 할일은 어떤 Mutation과 어떤 Query들을 우리가 가지고 있는지 알려주는것이다.

# 초기 셋팅 설치방법

@babel/cli
@babel/core
@babel/node
@babel/preset-env
@babel/preset-react
graphql-yoga

를 설치해줍니다.

파일 package.json
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
로 설정 

  "scripts": {
    ...
    "start:d": "nodemon --exec babel-node server/index.js"
  },

추가 실행하여 http://localhost:4000/ 접속하면 확인할 수 있다.

기본적으로 우리가 Query안에 보내고 그안에는 name이 있었다. 그리고 GraphQL이 우리의 서버에서 이 Query에 맞는 Resolvers를 찾는것이다. 만약에 Resolvers에서 name을 myName으로 변경하면 Query.myName이 schema에 없고 Resolvers에 정의되어있다는 오류가 발생한다. 또한 schema.graphql 에서 String이 아닌 Int로 하게되면? Int는 숫자로 반환하라는 뜻이므로 당연히 에러가 발생할 것이다. 이렇게 data의 type을 미리 적어놓는것이 매우 안전하다.

그렇다면 이제는 추측할 수 있다 과연 이 playground는 무엇일까?
바로 우리의 Database를 안전하게 테스트하게 해주는 놀이터이다.

# 연습

// schema.graphql

type youngseop {
    name: String!
    age: Int!
    gender: String!
}

type Query {
    person: youngseop!
}
// resolvers.js

const youngseop = {
    name: "Bae youngseop",
    age: 26,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => youngseop
    }
}

export default resolvers;

위에서 설명했었듯이 Query는 설명, Resolvers는 프로그래밍이다.
Query에서 새로운 youngseop이라는 type을 설명했다 여기서 name, age, gender를 따로 받을수 있게된다. 그리고 type Query에서 person은 youngseop을 반환한다고 설명해놨다.
그리고 Resolvers에서 youngseop이란 변수의 name, age, gender를 정해놓았다. resolvers 변수에서 Query의 person은 위에서 미리 설명한 youngseop을 반환해야한다.
자이제 서버를 재시작하고 우리의 Playground를 새로고침하자. 그리고 오른쪽에 초록색버튼의 SCHEMA를 클릭해보자.

# 심화 연습

// schema.graphql

type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String!
}

type Query {
    people: [Person]!
    person(id: Int!): Person
}
위에서 people이 보내는것은 [Person] 이다. 여기서 people은 오직 하나의 Person만 보내지 않고 다수의 Person을 보낸다. 다시말해 Person이 array라는 것이다. 우리는 다수의 Person을 보낼것이고 이건 필수 사항이라는 뜻이다. 여기서 필수사항이라는 말이 조금 복잡한데 선택적으로 받아올수는 있지만 null 일수 없다는 뜻이다.
그리고 오직 하나의 Person만 받아오고 싶을땐 ID가 필요하다. id를 넣은 person은 Person을 받아오게된다. 여기서는 필수사항 표시를 넣지 않았는데 그 이유는 해당 id의 Person을 찾지 못할 수 도 있기 때문이다.

간략하게 정리하면 people은 Person type의 배열이고, person은 id를 가진 하나의 Person type 이다.

const people = [
    {
        id: 1,
        name: "Bae youngseop",
        age: 26,
        gender: "male"
    },
    {
        id: 2,
        name: "AAA",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "BBB",
        age: 30,
        gender: "male"
    },
    {
        id: 4,
        name: "CCC",
        age: 40,
        gender: "female"
    },
    {
        id: 5,
        name: "DDD",
        age: 50,
        gender: "male"
    }
]


const resolvers = {
    Query: {
        people: () => people
    }
}

export default resolvers;
people을 배열로 만들고 사용자도 5명까지 추가하고 각각 id도 부여하였다.
Query에 의해 설명된것을 보면 people은 people을 반환하는데 이것을 설명하는 위의 schema에 따르면 people은 Person type으로 작성된 배열이나, 혹은 Person type으로 작성되고 id가 일치하는 하나의 people을 가져오게 되는것이다. 말로 설명하니 정말 복잡한데 놀이터의 SCHEMA로 보면 조금 더 직관적이다.

{
  peple {
    age
    name
  }
}

# 검색시 원하는 자료만 출력

전체영역중 이름과 나이만 필요하고 이 필요한 부분만 GraphQL을 통해서 받게 되는것이다.

우리의 데이터가 꽤 커졌으니 따로 관리하는게 좋을것 같다.

// graphql/db.js

export const people = [
    {
        id: 1,
        name: "Bae youngseop",
        age: 26,
        gender: "male"
    },
    {
        id: 2,
        name: "AAA",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "BBB",
        age: 30,
        gender: "male"
    },
    {
        id: 4,
        name: "CCC",
        age: 40,
        gender: "female"
    },
    {
        id: 5,
        name: "DDD",
        age: 50,
        gender: "male"
    }
]
// resolver.js

import { people } from "./db";

const resolvers = {
    Query: {
        people: () => people
    }
}

export default resolvers;
graphql 폴더에 그대로 db.js라는 파일을 생성하고 resolver.js 파일에 있는 데이터를 옮긴 후 export 하고 resolver.js에서 import 했다.

db.js에서 함수를 만들수도 있다.

// db.js

export const people = [
    ...
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};
// resolver.js

import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
}

export default resolvers;
이 함수는 지정 id에 대응하는 대상을 getById로 찾아내는 기능이다.
함수 구현이 됬다면 테스트도 해보자.

{
  person(id : 1) {
    name
  }
}

원하는 자료만 나옵니다.

# API 불러오기

이제 본격적으로 영화 API를 생성해 볼것이다. 먼저 우리의 db에 사용하려는 api를 불러올것이다. 이번에 사용할 영화 api는 https://yts.am/api 에서 제공하는 api를 사용할 것 이다.
api key도 따로 필요 없으면서 많은 영화의 db를 자주 업데이트되는 api를 제공한다. 우리에게 딱 맞는 api인것같다.

이제 Graph QL로 REST API를 감싸볼 것이다. 코드 작성 전에 설치해야 할 패키지가 있다.

yarn add node-fetch
fetch를 위한 패키지 설치이다. 그리고 코드를 수정하자.

// db.js

import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json"

export const getMovies = (limit, rating) => fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);

    db.js에서는 우리가 가져올 api주소를 fetch하였다. 그리고 이어서 json파일로 변환했다.

파라미터로 가져온 limit와 rating은 추후에 사용할 갯수제한과 rating 순서대로 정렬을 위해 미리 적어놓았다. 이 파라미터들은 위에서 언급한 yts.am에서 제공하는 옵션이다.

// resolver.js

import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies()
    }
}

export default resolvers;
resolvers에서는 당장 우리가 필요한 기능인 영화를 불러오는 기능만 구현하였다.

// schema.graphql

type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
}

type Query {
    movies: [Movie]!
}
schema에서는 API에서 불러올 영화의 필수정보들을 정의했다.


// db.js

import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    
    if (limit > 0) {
        REQUEST_URL += `&limit=${limit}`;
    }

    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}
REQUEST URL을 만들고 yts에서 제공하는 옵션인 limit와 rating 파라미터를 이용해 API를 컨트롤 할 수있다. limit가 설정됬을 때와 rating이 설정됬을 때 REQUEST URL이 바뀌면서 가져오는 API의 response가 달라지게 되는것이다.

// resolver.js

import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
        처음 보내는 argument _ 는 현재의 Object
    }
}

export default resolvers;
// schema.graphql

type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
}

type Query {
    movies(limit: Int, rating: Float): [Movie]!
}
schema와 resovers.js 는 우리가 API를 호출할때 명령어를 선택사항으로 불러올 수 있게 만든것이다.