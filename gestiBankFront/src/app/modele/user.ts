export class User {

	id: number;
	prenom: string;
	email: string;
	username: string;
	pwd: string;
	address: string;
	numTel: string;

	

	
	constructor(id: number, prenom: string, email: string,
    username: string, pwd: string, address: string, numTel: string) {
		this.id = id;
		this.prenom = prenom;
		this.email = email;
		this.username = username;
		this.pwd = pwd;
		this.address = address;
		this.numTel = numTel;

	}
}