const {expect} = require ('chai')
const {userCreateQ} = require ('./queries')
const {user} = require ('./data')
const gqlRequest = require ('../../gqlRequest')

let respData = null;
let postData = null;

describe('USER CREATE',() => {
    describe('USER CREATE - POSITIVE TESTS',() => {

        it('user create all fields', (done) => {
            postData={
                query: userCreateQ,
                variables: user
                }


            gqlRequest(postData)
            .expect(200)
            .end((err,res)=>{
                if(err) return done (err);
                respData = res.body.data;
                console.log(respData);
               expect (respData.userCreate.firstName).eq(user.userInput.firstName);
               expect (respData.userCreate.lastName).eq(user.userInput.lastName);
               console.log ('ответ',respData.userCreate.firstName, '----------ожидание =',user.userInput.firstName);
               console.log ('ответ',respData.userCreate.lastName, '----------ожидание =',user.userInput.lastName);
          done();
                    
            })
        
        })

    })

   //  describe('USER CREATE - NEGATIVE TESTS',() => {

  //  })

})