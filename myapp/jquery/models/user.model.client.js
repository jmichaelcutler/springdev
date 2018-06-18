function User(username, password, firstName, lastName) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;

    this.getUsername = getUsername;
    this.getPassword = getPassword;
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;

    this.setUsername = setUsername;
    this.setPassword = setPassword;
    this.setFirstName = setFirstName;
    this.setLastName = setLastName;

    function getUsername() {
        return this.username;
    }
    function getPassword() {
        return this.password;
    }
    function getFirstName() {
        return this.firstName;
    }
    function getLastName() {
        return this.lastName;
    }

    function setUsername(newUserName) {
        this.username = newUserName;
    }
    function setPassword(newPassword) {
        this.password = newPassword;
    }
    function setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }
    function setLastName(newLastName) {
        this.lastName = newLastName;
    }
}