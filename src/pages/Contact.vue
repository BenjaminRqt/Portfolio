<template>
    <div class="contact">
        <h2 class="title">
            Contact
        </h2>
        <form id="contact-me">
        <div class="form-group">
            <label for="identity">Nom et prénom</label>
            <input type="text" class="form-control" id="identity">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label class="form-check-label" for="message">Message</label>
            <textarea class="form-control" id="message"></textarea>
        </div>
        <button type="submit" class="button button--primary button--right">Envoyer</button>
        </form>
    </div>
</template>
