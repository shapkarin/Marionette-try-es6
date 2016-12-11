<div class="cd-cart-container <%= open ? 'cart-open' : '' %>">
<!-- <div class="cd-cart-container cart-open"> -->
    <a href="#/cart" class="cd-cart-trigger">
        Cart
        <ul class="count"> <!-- cart items count -->
            <li><%= len %></li>
        </ul> <!-- .count -->
    </a>

    <div class="cd-cart">
        <div class="wrapper">
            <header>
                <h2>count: <%= len %></h2>
                <span class="undo">Item removed. <a href="#0">Undo</a></span>
            </header>

            <div class="body">
                <ul id="cart-list">
                </ul>
            </div>

            <footer>
                <a href="#0" class="checkout btn"><em>Checkout - $<span><%= total %></span></em></a>
            </footer>
        </div>
    </div> <!-- .cd-cart -->
</div>
