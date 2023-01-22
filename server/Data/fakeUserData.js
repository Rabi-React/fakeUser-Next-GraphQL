const casual = require('casual');

const fakeUserData= [];

casual.define('fakeuser', function(x) {
	return {
        "id": x,
        "name": casual.name,
        "address":casual.address,
		"email": casual.email,
        "phone": casual.phone,
        "lastElement": x===2000 ? true: false
	};
});
for(let i=1; i <=2000; i++){
    fakeUserData.push(casual.fakeuser(i));
}

module.exports = fakeUserData;