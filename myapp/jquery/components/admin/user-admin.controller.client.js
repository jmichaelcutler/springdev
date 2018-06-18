(function() {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editButn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {

    }

    function AdminUserServiceClient(){
        this.createUser = createUser;
        this.findAllUsers = findAllUsers;
        this.findUserById = findUserById;
        this.deleteUser = deleteUser;
        this.updateUser = updateUser;
        this.selectUser = selectUser;
        this.renderUser = renderUser;
        this.renderUsers = renderUsers;
        this.url = "http://localhost:8080/api/user";
        var self = this;

    }

    function createUser(user){
        return fetch(self.url, {
            method: "POST",
            body: JSON.stringify(user)
        })
    }

    function findAllUsers(callback){
        return $.ajax({
            url: self.url,
            success: callback
        })
    }

    function findUserById(userId){
        return fetch(self.url + "/" + userId);
    }

    function deleteUser(userId, callback){
        return fetch(self.url + "/" + userId,
            {method: "DELETE"});
    }

    function selectUser(){}

    function updateUser(userId, user){
        return fetch(self.url + "/" + userId, {
            method: "PUT",
            body: JSON.stringify(user)
        })
    }

    function renderUser(user){
        $tbody.empty();
        var $row = $userRowTemplate.clone();
        $row.find('.wbdv-username').html(user.username);
        $tbody.append($row);
    }

    function renderUsers(users){
        for(var user in users) {
            this.renderUser(user);
        }
    }
})();