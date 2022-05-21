from django.contrib import admin

# Register your models here.
from .models import Post
admin.site.register(Post)

class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "slug", "author", "created", "updated")
    prepopulated_fieles = {"slug": "title",}
