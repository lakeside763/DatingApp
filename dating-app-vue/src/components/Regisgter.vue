<template>
    <div class="container">
        <div class="row" style="margin-top: 100px;">
            <div class="col-md-6 offset-3">
                <form>
                    <h2 class="text-center text-primary">Sign Up</h2>
                    <hr>

                    <div class="form-group">
                        <input type="text" class="form-control" required name="username" placeholder="Username">
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control" required name="password" placeholder="Password">
                    </div>

                    <div class="form-group text-center">
                        <button class="btn btn-success" type="submit" style="margin-right: 10px;">Register</button>
                        <router-link class="btn btn-outline-primary" to="/">Cancel</router-link>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>