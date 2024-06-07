document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.shopping-card-container');
    const totalPriceElement = document.querySelector('.total-price .total');
    
    // Update total price
    function updateTotalPrice() {
      let total = 0;
      document.querySelectorAll('.list-products .card').forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace(' $', ''));
        total += quantity * unitPrice;
      });
      totalPriceElement.textContent = `${total} $`;
    }
  
    // Event delegation for handling button clicks
    cart.addEventListener('click', (event) => {
      const target = event.target;
      const cardBody = target.closest('.card-body');
      
      if (target.classList.contains('fa-plus-circle')) {
        // Increase quantity
        const quantityElement = cardBody.querySelector('.quantity');
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotalPrice();
      } else if (target.classList.contains('fa-minus-circle')) {
        // Decrease quantity
        const quantityElement = cardBody.querySelector('.quantity');
        const currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 0) {
          quantityElement.textContent = currentQuantity - 1;
          updateTotalPrice();
        }
      } else if (target.classList.contains('fa-trash-alt')) {
        // Remove product
        cardBody.closest('.card-body').remove();
        updateTotalPrice();
      } else if (target.classList.contains('fa-heart')) {
        // Toggle like
        target.classList.toggle('liked');
      }
    });
  
    // Initial total price update
    updateTotalPrice();
  });
  