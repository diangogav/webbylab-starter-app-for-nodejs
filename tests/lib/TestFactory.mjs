import User from '../../lib/domain-model/User.mjs';

class TestFactory {
    constructor() {

    }

    async standardSetup() {

    }

    async setupUsers() {
        await this._createDefaultUsers();
    }

    async _createDefaultUsers() {
        const users = [
            {
                email          : 'default1@gmail.com',
                firstName      : 'First',
                lastName       : 'Defaulr',
                password       : 'password',
                status         : 'PENDING',
                agreeWithTerms : true
            },
            {
                email          : 'default2@gmail.com',
                firstName      : 'Second',
                lastName       : 'Default',
                password       : 'password',
                status         : 'ACTIVE',
                agreeWithTerms : true
            }
        ];
        const savedUsers = await User.bulkCreate(users);

        return savedUsers;
    }
}

export default TestFactory;
