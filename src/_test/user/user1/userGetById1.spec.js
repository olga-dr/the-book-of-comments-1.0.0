const {expect} = require ('chai')
const {userGetByIdQ} = require ('./queries')
const gqlRequest = require ('../../gqlRequest')

let respData = null;
let postData = null;

describe('USER GET BY ID',() => {
    describe('USER GET BY ID - POSITIVE TESTS',() => {

        it('user get by id', (done) => {
            postData={
                query: userGetByIdQ,
                variables: {
                    userId: '66c7675582d13716767ab11f'
                  }
                }
            
            gqlRequest(postData)
            .expect(200)
            .end((err,res)=>{
                if(err) return done (err);
                respData = res.body.data.userGetById;
                console.log(respData);
                expect (respData._id).eq(postData.variables.userId)
                console.log ('ответ',respData._id, '----------ожидание =',postData.variables.userId);
          
             done();
                    
            })
        
        })

    })

   //  describe('USER GET BY ID - NEGATIVE TESTS',() => {

  //  })

})