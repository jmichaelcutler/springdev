(function() {
    $(init);
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var userService = new UserServiceClient();


    function init() {
        $usernameFld = $('#usernameFld');
        $passwordFld = $('#passwordFld');
        $firstNameFld = $('#firstNameFld');
        $lastNameFld = $('#lastNameFld');
        $userRowTemplate = $('.wbdv-template.wbdv-user')
            .clone()
            .removeClass('wbdv-hidden');
        $createBtn = $('.wbdv-create');
        $createBtn.click(createUser);
        $removeBtn = $('.wbdv-remove');
        $removeBtn.click(deleteUser);
        $editBtn = $('.wbdv-edit');
        $editBtn.click(updateUser);

    }



    function createUser(user){
        userService.createUser(user);
    }

    function findAllUsers(callback){
        userService.findAllUsers(callback);
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
        for(var user in users)
            this.renderUser(user);
    }
})();