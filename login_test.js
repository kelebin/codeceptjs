Feature('login');

Scenario('Login with success', ({ I }) => {

    
    //fill email field
    I.fillField('~email','teste@teste.com')

    //fill password field
    I.fillField('~senha','123456')
    
    //tap on login
    I.tap('~entrar')

    //check
    ////android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
    I.waitForElement('~salvar', 5)
    I.seeElement('~salvar')
    
    //I.wait(5);

});


Scenario('Login with error', ({ I }) => {

    
    //fill email field
    I.fillField('~email','teste.com')

    //fill password field
    I.fillField('~senha','123456')
    
    //tap on login
    I.tap('~entrar')

    //check
    ////android.view.ViewGroup[@content-desc="salvar"]/android.view.ViewGroup
    I.waitForElement('~lognFail', 5)
    I.seeElement('~lognFail')
    
    //I.wait(5);

});
