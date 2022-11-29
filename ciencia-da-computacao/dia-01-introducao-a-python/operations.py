square_root = 25 ** (1/2)  # raiz quadrada de 25. O operador `**` significa "elevado a"

print(square_root + 1)  # saída: 6.0

counter = 0

# original
counter = counter + 1

print(counter)

# simplificado
counter += 1

print(counter)

3 // 2  # saída: 1
print(3 // 2)

3 / 2  # saída: 1.5
print(3 / 2)


# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.
a = 10;
b = 5

print(a / b);
print(a // 3)
print(a * b)
print(a + b)
print(a - b)
print(25 ** (1/2)) # raíz quadrada
print(10 ** (5)) 
print(a % b)

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.
hours = 6;
minutes = hours * 60;
seconds = minutes * 60;

# Exercício 3: Teste e verifique o que acontece se você colocar um ponto e vírgula no final de uma instrução em Python.
# Nada, funciona como em JS

# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.

livro = 24.20;
livroPapelaria = 24.20 * 0.6;
primeiroLivro = 3.00;
demaisLivros = 0.75;
totalLivros = 60

custoTotal = (((totalLivros - 1) * demaisLivros) + primeiroLivro) + (totalLivros * livroPapelaria)
print(custoTotal)

