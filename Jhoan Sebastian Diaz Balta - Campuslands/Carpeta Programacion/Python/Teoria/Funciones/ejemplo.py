def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9 

def celsius_to_kelvin(celsius):
    return celsius + 273.15

def kelvin_to_celsius(kelvin):
    return kelvin - 273.15

#*CODE MAIN*#
c = float(input("Temperatura en grados centigrados: "))

f = float(input("Temperatura en fahrenheit: "))

k = float(input("Temperatura en kelvin: "))

rtacf = celsius_to_fahrenheit(c)
rtafc = fahrenheit_to_celsius(f)
rtack = celsius_to_kelvin(c)
rtakc = kelvin_to_celsius(k)

print("-"*30)
print(f"Celsius to fahrenheit: {rtacf}")
print("-"*30)
print(f"Fahrenheit to celsius: {rtafc}")
print("-"*30)
print(f"Celsius to Kelvin: {rtack}")
print("-"*30)
print(f"Kelvin to celsius: {rtakc}")
print("-"*30)


