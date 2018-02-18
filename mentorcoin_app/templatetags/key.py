from django import template

register = template.Library()

@register.filter
def key(d, key_name):
    try:
        d[key_name]
    except KeyError:
        return False

    return d[key_name]

