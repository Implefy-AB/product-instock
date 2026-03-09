import { patch } from "@web/core/utils/patch";
import { renderToFragment } from "@web/core/utils/render";
import { ProductPage } from "@website_sale_stock/interactions/product_page";

patch(ProductPage.prototype, {
    async _onChangeCombination(ev, parent, combination) {
        await super._onChangeCombination(...arguments);

        if (!combination.is_storable || !combination.product_id) {
            return;
        }

        // Remove any existing "I lager" badges for this template
        const container = this.el.querySelector("div.availability_messages");
        if (!container) {
            return;
        }
        container.querySelectorAll(".product_instock_badge").forEach(
            (el) => el.remove()
        );

        // Render and append "I lager" badge if in stock
        if (combination.free_qty > 0 && !combination.allow_out_of_stock_order) {
            const fragment = renderToFragment(
                "product_instock.in_stock_badge",
                combination
            );
            // Wrap in a container we can find later
            const wrapper = document.createElement("div");
            wrapper.classList.add("product_instock_badge");
            wrapper.append(fragment);
            container.prepend(wrapper);
        }
    },
});
