from django import template

register = template.Library()

@register.filter
def times(i):
    return range(1, int(i)+1)

