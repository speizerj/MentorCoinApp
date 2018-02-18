from django import template

register = template.Library()

@register.filter
def addstr(a, b):
    return str(a) + str(b)